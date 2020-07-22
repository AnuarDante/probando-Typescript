import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

//Routes
import indexRoutes from './routes';

class Application {
    app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.routers();
        this.settings();
    }

    settings(){
        this.app.set('port',3000);
        this.app.set('views', path.join(__dirname,'views'));
        this.app.engine('.hbs',exphbs({
            layoutsDir:path.join(this.app.get('views'),'layouts'),
            partialsDir:path.join(this.app.get('views'),'layouts'),
            defaultLayout: 'main',
            extname:'.hbs'     
        }));
        this.app.set('view engine','.hbs');
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    routers(){
        this.app.use(indexRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'),() =>{
            console.log("Servidor lenvantado ", this.app.get('port'));
        });
    }
} 

export default Application;