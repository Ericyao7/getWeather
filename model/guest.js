/**
 * Created by Ericyao on 7/18/16.
 */
var mongodb = require('./db');

function Guest(guest){
    this.name = guest.name;
    this.email = guest.email;
    this.comment = guest.comment;
};

module.exports = Guest;

//Save the user's information
Guest.prototype.save = function(callback){
    var guest = {
        name: this.name,
        email: this.email,
        comment: this.comment
    };


    //open the DB
    mongodb.open(function (err,db){
        if(err){
            return callback(err);
        }

        //read the guests' set
        db.collection('guests',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }

            //Insert the data into Guests collection
            collection.insert(guest,{
                safe:true
            },function(err,guest){
                mongodb.close();
                if(err){
                    return callback(err);
                }
                callback(null,guest[0]);
            })
        })

    })

}
