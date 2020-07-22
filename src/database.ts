import mongoose from 'mongoose';

async function connect(){

    try{
        await mongoose.connect('mongodb://localhost/testTypesrcipt',{
            useNewUrlParser:true,useUnifiedTopology: true 
        });
        console.log('Conectado a la base de datos');
    }
    catch{
        console.log("error al conectar mongodb");
    }
}

export default connect;