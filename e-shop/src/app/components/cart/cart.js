function LignePanier (photo, reference, quantite, prix)
{
	this.photoProduit = photo;
    this.referenceProduit = reference;
    this.qteProduit = qte;
    this.prixProduit = prix;
    this.ajouterQte = function(qte)
    {
        this.qteProduit += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixProduit * this.qteProduit;
        return resultat;
    }
    this.getReference = function() 
    {
        return this.referenceProduit;
    }
}


function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(photo,reference, qte, prix)
    { 
        var index = this.getProduit(reference);
        if (index == -1) this.liste.push(new LignePanier(photo, reference, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getProduit = function(reference)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (reference == this.liste[i].getReference()) return i;
        return -1;
    }
    this.supprimerProduit = function(reference)
    {
        var index = this.getProduit(reference);
        if (index > -1) this.liste.splice(index, 1);
    }
}