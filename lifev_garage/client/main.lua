LIFE = nil

Citizen.CreateThread(function()
    while LIFE == nil do
        TriggerEvent(LIFEV.esxgetSharedObjectevent, function(obj) LIFE = obj end)
        Citizen.Wait(0)
    end
end)

local currentgarage = nil

function visible(bool)
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        action = 'show',
        state = bool
    })
end

function setcars(veh)
    SendNUIMessage({
        action = 'setcars',
        data = veh
    })
end

RegisterNUICallback('exit', function(data, cb)
    SetNuiFocus(false, false)
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        local playerPed = PlayerPedId()
        local pos = GetEntityCoords(playerPed)

        for k,v in pairs(LIFEV.CarGarages) do
            local dist = GetDistanceBetweenCoords(pos, v.Marker)

            if dist <= 2.0 then
                LIFE.ShowHelpNotification("Drücke ~INPUT_CONTEXT~ um auf die Garage zuzugreifen")

                if IsControlJustReleased(0, 38) then
                    visible(true)
                    currentgarage = k
                end
            end
        end
    end
end)

RegisterNUICallback('notify', function(data, cb)
    TriggerEvent(LIFEV.esxprefix.."showNotification", data.text)
end)

RegisterNUICallback('enable-parkout', function(data, cb)
    local veh = {}

    LIFE.TriggerServerCallback('lifev_garage:loadVehicles', function(ownedCars)
        if #ownedCars == 0 then
            TriggerEvent(LIFEV.esxprefix.."showNotification", "Du hast keine Fahrzeuge.")
        else
            for k,v in pairs(ownedCars) do
                local hashVehicule = v.vehicle.model
                local aheadVehName = GetDisplayNameFromVehicleModel(hashVehicule)
                local modelName = GetLabelText(aheadVehName)
                table.insert(veh, {model = modelName, plate = v.plate, nickname = v.name, isfav = v.isFav, showrenamewindow = false})
            end
        end
        setcars(veh)
    end)
end)

local lastvehicles = {}
local lastownedvehicles = {}

RegisterNUICallback('enable-parking', function(data, cb)
    local veh = {}
    local vehicles = LIFE.Game.GetVehiclesInArea(GetEntityCoords(PlayerPedId()), 25.0)

    if #vehicles == 0 then
        setcars(veh)
        return
    else
        if json.encode(lastvehicles) == json.encode(vehicles) then
            setcars(lastownedvehicles)
        else
            LIFE.TriggerServerCallback('lifev_garage:loadVehicles2', function(ownedCars)
                if #ownedCars == 0 then
                    setcars(veh)
                    return
                else
                    for k,v in pairs(ownedCars) do
                        for s,u in pairs(vehicles) do
                            if v.plate:upper():gsub("%s+", "") == GetVehicleNumberPlateText(u):gsub("%s+", "") then
                                table.insert(veh, {model = GetDisplayNameFromVehicleModel(GetEntityModel(u)), plate = GetVehicleNumberPlateText(u), nickname = v.name, isfav = v.isFav, showrenamewindow = false})
                                setcars(veh)
                            end
                        end
                    end
                end
            end)
            lastownedvehicles = veh
            lastvehicles = vehicles
        end
    end
end)

RegisterNUICallback('setvehfav', function(data, cb)
    TriggerServerEvent("lifev_garage:setvehfav", data.plate, data.state)
    if data.state then
        TriggerEvent(LIFEV.esxprefix.."showNotification", "Du hast dein Fahrzeug favorisiert.")
    else
        TriggerEvent(LIFEV.esxprefix.."showNotification", "Du hast dein Fahrzeug entfavorisiert.")
    end
end)

RegisterNUICallback('rename', function(data, cb)
    TriggerServerEvent("lifev_garage:setvehnickname", data.plate, data.nickname)
    TriggerEvent(LIFEV.esxprefix..'showNotification','Du hast denn Nickname von dem Fahrzeug mit dem Kennzeichen: ' .. data.plate .. ' zu ' .. data.nickname.. ' Geändert')
end)

RegisterNUICallback('park-in', function(data, cb)
    local vehicles = LIFE.Game.GetVehiclesInArea(GetEntityCoords(PlayerPedId()), 25.0)

    for k,v in pairs(vehicles) do
        if GetVehicleNumberPlateText(v) == data.plate then
            TriggerServerEvent('lifev_garage:saveProps', data.plate, LIFE.Game.GetVehicleProperties(v))
            TriggerServerEvent('lifev_garage:changeState', data.plate, 1)
            LIFE.Game.DeleteVehicle(v)
        end
    end
end)

RegisterNUICallback('park-out', function(data, cb)
    LIFE.TriggerServerCallback('lifev_garage:loadVehicle', function(vehicle)
        local x,y,z = table.unpack(LIFEV.CarGarages[currentgarage].Spawner)
        local props = json.decode(vehicle[1].vehicle)
        props.plate = vehicle[1].plate

        LIFE.Game.SpawnVehicle(props.model, {
            x = x,
            y = y,
            z = z + 1
        }, LIFEV.CarGarages[currentgarage].Heading, function(callback_vehicle)
            LIFE.Game.SetVehicleProperties(callback_vehicle, props)
            SetVehRadioStation(callback_vehicle, "OFF")
            TaskWarpPedIntoVehicle(PlayerPedId(), callback_vehicle, -1)
        end)
    end, data.plate)    

    TriggerServerEvent('lifev_garage:changeState', data.plate, 0)
    
    cb('ok')
end)

Citizen.CreateThread(function()
    for k,v in pairs(LIFEV.CarGarages) do
        local blip = AddBlipForCoord(v.Marker)

        SetBlipSprite(blip, 473)
        SetBlipScale(blip, 0.6)
        SetBlipColour(blip, 0)
        SetBlipDisplay(blip, 4)
        SetBlipAsShortRange(blip, true)

        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString("Garage")
        EndTextCommandSetBlipName(blip)
    end
end)

