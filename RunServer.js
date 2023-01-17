const http = require('http');
const host = 'localhost';

const port =3000;
const server =http.createServer((req,res)=>{
    res.setHeader('content','text/html');
    res.statusCode=200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Template 2</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <style>
        .navbar {
          margin-bottom: 0;
          border-radius: 0;
        }
        footer {
          background-color: #f2f2f2;
          padding: 25px;
        }
      </style>
    <body>
        <div class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                    </button>
                    <div class="navbar-brand">Portfolio</div>
                </div>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="jumbotron">
            <div class="container text-center">
                <h1>My Portfolio</h1>
                <p>Some New Text..</p>
            </div>
        </div>
    
        <div class="container text-center">
            <h3>Some of My Work</h3>
            <br>
            <div class="row">
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2020/09/01/21/03/sunset-5536777__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2021/08/03/14/07/river-6519572__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2020/01/01/18/13/train-4734126__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2019/03/12/18/53/city-4051537__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2021/08/04/03/06/hanoi-6520941__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
                <div class="col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" class="img-responsive" alt="">
                    <br>
                    <p>Some Text</p>
                </div>
            </div>
            
        </div>
        <br><br>
        <footer class="text-center">
            <p>Footer Content</p>
        </footer>
    </body>
    
    </html>`);
});
server.listen(port, host, ()=>{
    console.log(`server is running at http://${host}:${port}/`)
})