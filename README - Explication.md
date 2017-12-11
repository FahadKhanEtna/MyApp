Pour lancer l'application : 
- Ouvrir le cmd
- Aller dans le fichier de l'app
- Effcectuer la commande npm install
- Lancer l'application avec la commande npm start
- L'application se lance dans http://localhost:8080
- Lancer simultanement le server-json avec la commande json-server --watch fillDB.js
- Le server json se lance dans http://localhost:3000/videos
L'application est maintenant lancer...

Pésentation de l'application
- L'application sert à regarder la bande d'annonce souhaitée
- Par default elle affiche le film le plus populaire en video principale
- A droite elle affiche les 5 films les plus populaires
- Lorsque vous effectuez une regarde de film dans la barre de recherche, la video principale ainsi que la liste se mets a jour
- Vous avez également la possiblilité de laisser un commentaire via un formulaire situé sous la vidéo principale
- Lorsque vous ajoutez un commentaire vous etes redirigé vers la page des commentaires
- Vous pouvez ainsi vous les commentaires deja existants (généré par casual pour un meilleur test de l'application)
- A partir ce cette liste vous avez la possiblité de supprimer les commentaires
- Et enfin vous pouvez revenir sur la page principale via un bouton qui se situe en bas de la page de commentaires.


Ce que j'ai compris :

LIFECYCLE
- Cycle de vie d'un component comprend plusieur étapes
- En Créé un constructeur() -> dans lequel on déclare le state et on récupère les props des parents,
- Ensuite on fait un componentWillMount() -> On peut y effectuer des requêtes AJAX par exemple,
- Puis vient la fonction render() -> Qui retourne les résultats,
- ComponentDidMount lordque le component à finit de charger,
- Et enfin le component est détruit avec ComponentWillUnmount

PROPS
- Cest un paramètre que l'on va passer dans un component pour pouvoir l'utiliser dans celui ci,
- Par exemple <Message pseudo="Fahad">  ->  J'ai passé le paramètre pseudo à Message.
- On peut également l'apeller dans un fichier enfant en utilisant <this.props.pseudo>,
- On peut passer autant de paramètre que l'on veut. 

STATE
- C'est un objet qui va contenir des paramètres utiles à l'application, 
- Lorsque le state est modifier il va directement actualiser les bonnes parties du code sans avoir besoin de toucher aux autres parties,
- Exemple : lorsqu'on tape quelque chose dans un input il s'affiche directement sur la page, il va contenir les infos comme text,placeholder...
- Pour mettre à jour un state on utilise setState, on ne modifie jamais le state en utlisant "state",
- Pour supprimer une donnée du state en utilise map(key=>maVariable[key] = null. On passe la valeur a nul et il est supprimer automatiquement.
