cfg = {
    "_id": "GVDrs",
    "members": [
        { "_id": 0, "host": "mongo1:27017" },
        { "_id": 1, "host": "mongo2:27018" },
        { "_id": 2, "host": "mongo3:27019", arbiterOnly: true }
    ]
}
print("ReplicaSet configuration document:")
printjson(cfg);
printjson(rs.initiate(cfg));
print("ReplicaSet initialized!");
print("Updated config: ")
printjson(rs.status());
/* printjson(rs.conf()); */
/* rs.slaveOk();
db.getMongo().setReadPref('nearest');
db.getMongo().setSlaveOk(); */