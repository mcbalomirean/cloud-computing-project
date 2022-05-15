# Cloud Computing Project

Aplicația pe Heroku: https://stormy-savannah-55557.herokuapp.com/
Demonstrație video: https://youtu.be/YfImab5VOsA

## Introducere

În acest proiect s-a realizat o aplicație de tip Cloud Computing, folosind Google Cloud Platform pentru API-urile necesare și Heroku pentru lansarea fie a backend-ului cât și a frontend-ului. Aplicația se numește **Cloud Notes**.

## Descrierea problemei

Problema tratată a fost stocarea de notițe, și mai ales stocarea de notițe fizice (folosind imagini ale unor foi de hârtie, de exemplu) sau alte imagini digitale pentru a fi ușor de căutat.

## Descrierea API-urilor

Pentru păstrarea notițelor a fost folosit serviciul de MySQL al Google Cloud Platform, stocându-le astfel în cloud. Platforma Google oferă mai multe servicii pentru baze de date în cloud, cu diferite configurări de memorie și putere de procesare, dar în cazul aplicației **Cloud Notes** s-a creat o instanță simplă cu setările prestabilite. Singura modificare a fost la cantitatea maximă de date care poate fi stocată, care a fost setată la 10 GB.
Există două tabele în aplicație, `notes` și `images`. Unul conține notițele în sine, iar celălalt conține rezultatele procesării imaginilor.

Pentru digitalizarea notițelor folosind imagini a fost folosit API-ul Cloud Vision. Pentru a evita păstrarea imaginilor pe cloud, și pentru a putea eficientiza operațiunile de pe backend, se acceptă imagini doar sub formă de URL și sunt procesate o singură dată.

## Fluxul de date

### Exemple de request/response

### `GET /notes`

Response body:
`[ { "id": 14, "image_id": null, "title": "My First Note!", "content": "This is my first note!", "url": null, "text": null }, { "id": 15, "image_id": null, "title": "Test!", "content": "Test!", "url": null, "text": null }, { "id": 27, "image_id": 14, "title": "My First Image Note!", "content": "When people say\nvideogames make you\nviolent but you're too scared\nto click the rude dialogue\noption because you don't\nwant to hurt the NPC's\nfeelings\n", "url": "https://i.imgur.com/AfBFDvs.jpeg", "text": "When people say\nvideogames make you\nviolent but you're too scared\nto click the rude dialogue\noption because you don't\nwant to hurt the NPC's\nfeelings\n" } ]`

### `POST /notes`

Request body: `{ "title": "Example Request!", "content": "This is for the example request!" }`
Response body: `{ "fieldCount": 0, "affectedRows": 1, "insertId": 31, "info": "", "serverStatus": 2, "warningStatus": 0 }`

### `POST /images`

Request body: `{ "url": "https://i.imgur.com/AfBFDvs.jpeg", "title": "Same Image Again!" }`
Response body: just the status, 200

### Metode HTTP

`GET /notes`
Pentru cererea tuturor notițelor.

`GET /notes/:id`
Pentru cererea unei singure notițe.

`POST /notes`
Pentru inserarea unei notițe.

`PUT /notes/:id`
Pentru actualizarea unei notițe.

`DELETE /notes/:id`
Pentru ștergerea unei notițe.

`POST /images`
Pentru analizarea unei imagini și, ulterior, inserarea unei notițe folosind-o.

### Autentificare și autorizare servicii utilizate

Pentru versiunea curentă a aplicației, nu există autentificarea unui utilizator. În schimb, a fost nevoie de credențiale de acces la API-urile Google Cloud, și au fost stocate sub forma unor fișiere `.env` care nu au fost inserate în git.
Pentru Heroku, deoarece nu este sigură încărcarea fișierelor de credențiale în git, acestea sunt generate automat când rulează aplicația din variabilele de configurație.

## Capturi ecran
