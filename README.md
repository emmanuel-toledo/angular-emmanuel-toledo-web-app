# Angular - Emmanuel Toledo

Commando para crear un nuevo proyecto, aseguresé de haber definido correctamente el ```volumen``` o ```bind mount``` deseado para verlo reflejado en su máquina local.

```
docker compose run --rm -it --build angular ng new emmanuel.toledo.app --directory ./
```

Comando para instalar dependencias con ```npm```.

```
docker compose run --rm -it --build angular npm install
```

Comando para inicializar la aplicación.

```
docker compose up --build app
```

Para detener nuestro docker compose podemos utilizar el siguiente comando.

```
docker compose down -v
```

Comando para agregar elemento en proyecto de Angular usando Angular CLI.

```
docker compose run --rm -it angular ng generate module modules/shared

docker compose run --rm -it angular ng generate module modules/shared --routing
```

Básicamente puedes completar cualquier comando ```ng``` con los parametros que necesite.

Agregar la bandera ```--build``` es opcional en cada comando.