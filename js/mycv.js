$(function() {
  //permettra d'accéder à nos variables en mode console
  window.mycv = {};

  /*--- Modèle experience ---*/

  // une "sorte" de classe Article
  mycv.Experience = Backbone.Model.extend({
    //les valeurs par défaut d'un article
    defaults: {
      annee: "année",
      titre: "titre de l'expérience",
      content: "contenu de l'experience",
      entreprise: "entreprise"
    },
    // s'exécute à la création d'un article
    initialize: function() {
      console.log("Création d'une nouvelle experience")
    }
  });
  
  /*--- Collection d'experience ---*/

  mycv.ExperiencesCollection = Backbone.Collection.extend({
    model: mycv.Experience,
    initialize: function() {
      console.log("Création d'une collection d'experiences")
    }
  });
  mycv.listeExperiences = new mycv.ExperiencesCollection();

  mycv.listeExperiences.add(new mycv.Experience({ annee: "2006",titre : "Analyste Développeur", content : "Développement PHP/PYTHON/JAVA ou Node.js sous MySQL/PostgreSQL ou Bdd NoSQL?" , entreprise:"Chez Vous?/Client final" }));
  mycv.listeExperiences.add(new mycv.Experience({ annee: "année",titre : "titre1", content : "contenu1", entreprise:"Entreprise" }));
  
  /*--- Vues ---*/
  mycv.ExperiencesView = Backbone.View.extend({
    el: $("#experiences-collection-container"),

    initialize: function() {
      this.template = _.template($("#experiences-collection-template").html());
    },

    render: function() {
      var renderedContent = this.template({
        experiences: this.collection.toJSON()
      });
      $(this.el).html(renderedContent);
      return this;
    }
  });
  
  experiencesView = new mycv.ExperiencesView({ collection : mycv.listeExperiences });
  experiencesView.render();

});