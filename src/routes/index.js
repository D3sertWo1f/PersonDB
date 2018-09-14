const express = require("express");
const router = express.Router(); //method gives back an obj

const Person = require("../models/person");


router.get('/', async(req, res) => {
    const persons = await Person.find();
    console.log(persons); 
    res.render('index', {
        persons
    });
});

router.post('/add', async(req, res) => {
    const person = new Person(req.body);
    await person.save()
    res.redirect('/');
});

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    await Person.remove({_id: id});
    res.redirect('/');
});

router.get('/edit/:id', async(req, res) => {
    const {id} = req.params;
    const person = await Person.findById(id);
    res.render('edit', {
        person
    })
});

router.post('/update/:id', async(req, res) =>{
    const {id} = req.params;
    await Person.update({_id : id}, req.body);
    res.redirect('/');
});

router.get('/turn/:id', async(req, res) => {
    const {id} = req.params;
    const person = await Person.findById(id);
    person.status = !person.status
    await person.save() 
    console.log(person)
    res.redirect("/")
});

module.exports = router;