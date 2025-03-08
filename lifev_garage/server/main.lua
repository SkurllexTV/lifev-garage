LIFE = nil

TriggerEvent(LIFEV.esxgetSharedObjectevent, function(obj)
	LIFE = obj
end)

LIFE.RegisterServerCallback('lifev_garage:loadVehicles', function(source, cb)
	local ownedCars = {}
	local s = source
	local x = LIFE.GetPlayerFromId(s)
	
    MySQL.Async.fetchAll('SELECT * FROM owned_vehicles WHERE owner = @owner AND stored = 1 AND job = @job AND type = "car"', {['@owner'] = x.identifier, ['@job'] = LIFEV.certainjobname}, function(vehicles)

        for _,v in pairs(vehicles) do
            local vehicle = json.decode(v.vehicle)
            table.insert(ownedCars, {vehicle = vehicle, stored = v.stored, plate = v.plate, name = v.nickname, isFav = v.isFav})
        end
        cb(ownedCars)
    end)
end)
LIFE.RegisterServerCallback('lifev_garage:loadVehicles2', function(source, cb)
	local ownedCars = {}
	local s = source
	local x = LIFE.GetPlayerFromId(s)
	
    MySQL.Async.fetchAll('SELECT * FROM owned_vehicles WHERE owner = @owner AND type = "car" AND job = @job', {['@owner'] = x.identifier, ['@job'] = LIFEV.certainjobname}, function(vehicles)

        for _,v in pairs(vehicles) do
            local vehicle = json.decode(v.vehicle)
            table.insert(ownedCars, {vehicle = vehicle, stored = v.stored, plate = v.plate, name = v.nickname, isFav = v.isFav})
        end
        cb(ownedCars)
    end)
end)

LIFE.RegisterServerCallback('lifev_garage:loadVehicle', function(source, cb, plate)
	local s = source
	local x = LIFE.GetPlayerFromId(s)
	
    MySQL.Async.fetchAll('SELECT * FROM owned_vehicles WHERE `plate` = @plate', {['@plate'] = plate}, function(vehicle)
        
        cb(vehicle)
    end)
end)

RegisterNetEvent('lifev_garage:setvehfav')
AddEventHandler('lifev_garage:setvehfav', function(plate, state)
    MySQL.Sync.execute("UPDATE owned_vehicles SET isFav = @isFav WHERE plate = @plate", {['@plate'] = plate, ['@isFav'] = state})
end)

RegisterNetEvent('lifev_garage:setvehnickname')
AddEventHandler('lifev_garage:setvehnickname', function(plate, nickname)
	MySQL.Sync.execute("UPDATE owned_vehicles SET nickname = @nickname WHERE plate = @plate", {['@plate'] = plate, ['@nickname'] = nickname})
end)

RegisterNetEvent('lifev_garage:changeState')
AddEventHandler('lifev_garage:changeState', function(plate, state)
	MySQL.Sync.execute("UPDATE owned_vehicles SET `stored` = @state WHERE `plate` = @plate", {['@state'] = state, ['@plate'] = plate})
end)

RegisterNetEvent('lifev_garage:saveProps')
AddEventHandler('lifev_garage:saveProps', function(plate, props)
	local xProps = json.encode(props)

    MySQL.Async.fetchAll('SELECT * FROM owned_vehicles WHERE plate = @plate', {['@plate'] = plate}, function(result)
        if json.decode(result[1].vehicle).model == props.model then
            MySQL.Sync.execute("UPDATE owned_vehicles SET `vehicle` = @props WHERE `plate` = @plate", {['@plate'] = plate, ['@props'] = xProps})
        end
    end)
end)