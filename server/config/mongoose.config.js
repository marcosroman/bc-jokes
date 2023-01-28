const mongoose =  require("mongoose");

mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1/mydb",
	{useNewUrlParser: true,
   useUnifiedTopology: true})
	.then(() => console.log("connected"))
	.catch(err => console.log("ooops: "+err));

