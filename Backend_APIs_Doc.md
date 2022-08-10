# Backend APIs Doc

### Postman Test Collection: https://www.getpostman.com/collections/3df63eb9f6cc487fdbc7 

#### Fetch API: GET http://localhost:5000/candidates

- Response

```json
[
    {
        "skills": [
            "1",
            "2"
        ],
        "createdAt": "2022-08-09T22:14:03.864Z",
        "_id": "62f2dc4ba574957e6fb2679d",
        "name": "John Test",
        "email": "123@gmail.com",
        "phone": "123456789",
        "highestDegree": "BS",
        "major": "Computer Science",
        "school": "Test University",
        "latestJobTitle": "Software Engineer",
        "latestCompany": "AAAA Inc.",
        "selectedResume": "data:application/pdf;base64,<base 64 PDF code>",
        "__v": 0
    }
]
```

#### Upload API: POST http://localhost:5000/candidates    

- Request body example:

```json
{
   "name":" John Test",
    "skills": ["java","python"],
    "email": "123@gmail.com",
    "phone":"123456789",
    "highestDegree":"BS",
    "experienceYr": 5,
    "major":"Computer Science",
    "school":"Test University",
    "latestJobTitle": "Software Engineer",
    "latestCompany": "AAAA Inc.",
    "selectedResume": "data:application/pdf;base64,<base 64 pdf code>"
}
```

#### Delete API: DELETE http://localhost:5000/candidates/{_id}

#### Seach API: Search Candidate by Name, Skills, or Experience Years: GET http://localhost:5000/candidates/search?name=none&skills=1,2&experienceYrs=4

