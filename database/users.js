var records = [
    { id: 1, username: 'mayur', password: 'ruyam2017', displayName: 'Mayur'}
, { id: 2, username: 'edwin', password: 'niwde2017', displayName: 'Edwin'}
, { id: 2, username: 'randy', password: 'ydnar2017', displayName: 'Randolph'}
];

exports.findUser = function(username, callback) {
    process.nextTick(function(){
        for (var i = 0; i < records.length; i++) {
            record = records[i];
            if (record.username === username) {
                return callback(null, record);
            }
        }
        return callback(null, null);
    });
}
