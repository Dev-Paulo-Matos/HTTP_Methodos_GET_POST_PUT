# HTTP_Methodos_GET_POST_PUT
#### Guia pessoal
# EXPRESS

## Primeiros passos com o node.js

### :roller_coaster: Instalação da biblioteca
```
- npm install express --save


```
### :car: Rodar o codigo
```
node app.js
```

###	:star: Abrindo servidor localhost
```
const express = require('express');
```
```
const porta = 3000;
```
```
const app = express();
```
```
app.listen(porta,(req,res)=> res.send("Hello World")
```
#### Methodo get
```


app.get('/',(req,res)=> res.send("Methodo GEt funcionando")
```
#### Methodo post :instagram:
```
const fs = require('fs')
app.post('/',(req,res)=>{
	const { name, id } = req.body
  
  data.pacientes.push({ name , id })
  
  fs.writeFileSync('data.json', JSON.stringify(data), (error) => { if(error) return res.status(400).json({ message: "algo de errado, não está certo" })
  
return res.send(req.body)
} 
```
