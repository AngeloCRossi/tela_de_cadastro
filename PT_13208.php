<?php
    echo "qualquer coisa ai";

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="http://www.cehoj.sp.caixa/0_includes/lib/jquery-inputmask/jquery.inputmask-5.0.0.js"></script>
    <style>
        .mb-0 {
        margin-bottom: 0;
        }
    </style>
</head>
<body>

<div class="container">
  <h2>Dynamic Tabs</h2>
  <p>To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane class with a unique ID for every tab and wrap them inside a div element with class .tab-content.</p>

    <ul class="nav nav-tabs">
        <!--li class="active">
            <a data-toggle="tab" href="#home">Home</a>
        </li-->
        <li class="active">
            <a data-toggle="tab" href="#menu1"><strong>Inclusão de indícios</strong></a>
        </li>
        <li>
            <a data-toggle="tab" href="#menu2"><strong>Visualização</strong></a>
        </li>
        <li>
            <a data-toggle="tab" href="#menu3"><strong>Listagem de Notificação</strong></a>
        </li>
    </ul>

  <div class="tab-content">
    <!--div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
        
    </div-->
    <div id="menu1" class="tab-pane fade in active panel-body">
    <form>
        <div class="row">
          <div class="col-sm-2 col-xl-2 col-md-2 col-lg-2">
          	<div class="form-group">
              <label class="mb-0" for="tp_pessoa">Tipo Pessoa:</label>
              <select class="form-control" id="tp_pessoa">
                <option value="1" name="CPF" selected>CPF</option>
                <option value="2" name="CNPJ">CNPJ</option>
              </select>
            </div>
          </div>
          <div class="col-sm-3 col-xl-3 col-md-3 col-lg-3">
            <div class="form-group">
              <label class="mb-0" for="nu_cpfcnpj">CPF/CNPJ:</label>
              <input type="text" class="form-control" id="nu_cpfcnpj" placeholder="Tipo de pessoa" name="nu_cpfcnpj">
            </div>
          </div>
          <div class="col-sm-7 col-xl-7 col-md-7 col-lg-7">
            <div class="form-group">
              <label class="mb-0" for="no_cliente">Nome do cliente:</label>
              <input type="text" class="form-control" id="no_cliente" placeholder="Tipo de pessoa" name="no_cliente">
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="mb-0" for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
</div>

</body>
<script>
  	$(document).ready(function(){
    	$("input#nu_cpfcnpj").inputmask({mask: ['999.999.999-99', '99.999.999/9999-99'], keepStatic: true});
    });
  </script>
</html>

