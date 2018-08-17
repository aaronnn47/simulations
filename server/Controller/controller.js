module.exports ={
    read: (req, res) => {
        let db = req.app.get('db')

        db.get_product().then( products => {
            res.status(200).send(products)
        })
        .catch( err => console.log(err, 'Get Products Failed'))
    },
    create: (req,res)=>{
        console.log('__create __')
        const db = req.app.get('db')
        console.log(req.body)
        let {property, address, city, state, zip} = req.body

        db.create_product([property,address,city,state,zip])
        .then(()=>{
            console.log('Product Created')
            res.status(200).send('Product Created')
        })
        .catch(err => console.log(err, 'Post failed'))
    }

}