Pour lancer l'application : 
- Ouvrir le cmd
- Aller dans le fichier de l'app
- Effcectuer la commande npm install
- Lancer l'application avec la commande npm start
- L'application se lance dans http://localhost:8080
- Lancer simultanement le server-json avec la commande json-server --watch fillDB.js
- Le server json se lance dans http://localhost:3000/videos
L'application est maintenant lancer...

P�sentation de l'application
- L'application sert � regarder la bande d'annonce souhait�e
- Par default elle affiche le film le plus populaire en video principale
- A droite elle affiche les 5 films les plus populaires
- Lorsque vous effectuez une regarde de film dans la barre de recherche, la video principale ainsi que la liste se mets a jour
- Vous avez �galement la possiblilit� de laisser un commentaire via un formulaire situ� sous la vid�o principale
- Lorsque vous ajoutez un commentaire vous etes redirig� vers la page des commentaires
- Vous pouvez ainsi vous les commentaires deja existants (g�n�r� par casual pour un meilleur test de l'application)
- A partir ce cette liste vous avez la possiblit� de supprimer les commentaires
- Et enfin vous pouvez revenir sur la page principale via un bouton qui se situe en bas de la page de commentaires.


Ce que j'ai compris :

LIFECYCLE
- Cycle de vie d'un component comprend plusieur �tapes
- En Cr�� un constructeur() -> dans lequel on d�clare le state et on r�cup�re les props des parents,
- Ensuite on fait un componentWillMount() -> On peut y effectuer des requ�tes AJAX par exemple,
- Puis vient la fonction render() -> Qui retourne les r�sultats,
- ComponentDidMount lordque le component � finit de charger,
- Et enfin le component est d�truit avec ComponentWillUnmount

PROPS
- Cest un param�tre que l'on va passer dans un component pour pouvoir l'utiliser dans celui ci,
- Par exemple <Message pseudo="Fahad">  ->  J'ai pass� le param�tre pseudo � Message.
- On peut �galement l'apeller dans un fichier enfant en utilisant <this.props.pseudo>,
- On peut passer autant de param�tre que l'on veut. 

STATE
- C'est un objet qui va contenir des param�tres utiles � l'application, 
- Lorsque le state est modifier il va directement actualiser les bonnes parties du code sans avoir besoin de toucher aux autres parties,
- Exemple : lorsqu'on tape quelque chose dans un input il s'affiche directement sur la page, il va contenir les infos comme text,placeholder...
- Pour mettre � jour un state on utilise setState, on ne modifie jamais le state en utlisant "state",
- Pour supprimer une donn�e du state en utilise map(key=>maVariable[key] = null. On passe la valeur a nul et il est supprimer automatiquement.
