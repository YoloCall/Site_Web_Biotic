# proj
Utilisation de l'application e-commerce Biotic
![alt tag](https://cdn-images-1.medium.com/max/1037/1*kkXbE9GlS73U7x1iXHP_vQ.png)


Deux parties backend et frontend & la partie Mongodb :

Reconstruire le projet npm install dans les dossiers suivants

a- e-shop

b- e-shop-back

c- installer mongodb puis importer le product.json

Exemple d'un objet produit: 

{
			"id": "02",
			"name": "Crème main coco",
			"reference": "AB1235",
			"manufacturer": "Biotic",
			"category": "Mains",
			"sub-category": "Crème",
			"price": 5.90,
			"photo" : "thumb3.gif",
			"rates" : [ 5, 6 ],
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ."
		},


1- Lancer Mongo en précisant la database : mongo-data (à partir de la racine du projet)

2- Lancer Node (nodemon à partir du dossier e-shop-back)

3- Lancer angular (ng serve à partir du dossier e-shop)
