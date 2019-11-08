//import mongoose from 'mongoose';
import Chat from './model.js';
import mongo from '../../mongo/MongoManager.js';

class chatDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const chat = new Chat(data);
    return chat.save();
}

}

export default new chatDAO();