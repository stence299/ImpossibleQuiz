module.exports = {
    create: (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.create_question()
            .then( () => res.status(200).send( question ) )
            .catch( () => res.status(500).send() )
    },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get("db");

        dbInstance.read_question()
            .then( () => res.status(200).send() )
            .catch( () => res.status(500).send() )
    },
    getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_questions()
      .then( questions => res.status(200).json( questions ) )
      .catch( (err) => res.status(500).json(err) );
    }, 

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_question()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
    },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_question()
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
    }
}