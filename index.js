const express=require("express")

const app=express();

app.use(express.json())

const data=[
    {
        id:1,
        name:"Baahubali",
        director:"S. S. Rajamouli",
        producer:"Shobu Yarlagadda",
        release_date:"10 July 2015",
        box_office:"₹650 crore",
        imageUrl:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    },
    {
        id:2,
        name:"3 Idiots",
        director:"Rajkumar Hirani",
        producer:" Vidhu Vinod Chopra",
        release_date:"25 December 2009",
        box_office:"400 crore",
        imageUrl:"https://theobjectivestandard.com/wp-content/uploads/2022/03/3-Idiots-Written-and-Directed-by-Rajkumar-Hirani.jpg",
    }
    ,
    {
        id:3,
        name:"Jawan",
        director:"Atlee Kumar",
        producer:" Gauri Khan",
        release_date:"7 September",
        box_office:"800+ crore",
        imageUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/shah-rukh-khan--jawan--srk-films-295651-1x1.jpg?VersionId=flG135APjYu35mqHqhjNACK3.P335ZY8",
    }
    ,
    {
        id:4,
        name:"KGF",
        director:" Prashanth Neel",
        producer:" Hombale Films",
        release_date:" 20 December 2018",
        box_office:"₹250 crore",
        imageUrl:"https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20",
    }
    ,
    {
        id:5,
        name:"RRR",
        director:"S. S. Rajamouli",
        producer:"D. V. V. Danayya",
        release_date:"24 March 2022",
        box_office:"1,260.00 cr.",
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
    }
    

];


app.get('/',(req,res)=>{
    res.send("api working");
})
app.get('/movies',(req,res)=>{
    res.send(data);
})

app.post('/movies',(req,res)=>{
    const new_data=req.body;
    new_data.id=data.length+1;
    data.push(new_data)
    res.send(new_data)
    
})


app.patch('/movies/:id',(req,res)=>{
    const id=req.params.id;
    const new_data=req.body;
    const index=data.findIndex(element=>element.id==id)
    if(index >= 0)
    {
        data[index].name=new_data.name;
        data[index].director=new_data.director;
        data[index].producer=new_data.producer;
        data[index].release_date=new_data.release_date;
        data[index].box_office=new_data.box_office;


    }
    else{
        res.send(404);
    }
    res.send(id);
   
})

app.delete('/movies/:id',(req,res)=>{
   const id=req.params.id;
   const index=data.findIndex(element=>element.id==id);
   if(index > -1){
    data.splice(index,1);
    res.send("deleted");
   }
   else{
    res.send(404);
   }
})



app.listen(3000, ()=>{
    console.log("server started");
});
