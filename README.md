# Angular - Emmanuel Toledo

Commando para crear un nuevo proyecto, aseguresé de haber definido correctamente el volumen o bind mount deseado para verlo reflejado en su máquina local.

docker compose run --rm -it --build angular ng new emmanuel.toledo.app --directory ./

Comando para instalar dependencias con "npm".

docker compose run --rm -it --build angular npm install

Comando para inicializar la aplicación 

docker compose up --build app

Comando para agregar elemento en proyecto de Angular usando Angular CLI.

docker compose run --rm -it angular ng generate module modules/shared

Agregar la bandera "--build" es opcional en cada comando.