const nocodb = {
    get email_updates() {
        const options = {
            method: 'GET',
            headers: {
            'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1fZ3JhbnRAYXBwbGUuY29tIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOiJ1c19rdDB6eHh0eXJ3c3V2bSIsInJvbGVzIjoidXNlcixzdXBlciIsInRva2VuX3ZlcnNpb24iOiI5NWYyMzhkZjhhZWRiYTViMmI0Y2I2Njg3OTcxYzA2OTRjODYyZTQ4NDBiODJiNTI0ZmMyODMwMmZmMjU3OTM0M2EwYWQzZWVkMjhjOWYyZiIsImlhdCI6MTY1ODI1MTc0OSwiZXhwIjoxNjU4Mjg3NzQ5fQ.Oe-7okOnzoZ_lFVFC1DxHYI4idMMw7XG0YT1EFbwir0'
            }
        };
        
        return fetch('http://localhost:8080/api/v1/db/data/noco/p_40kex4w9pjldy0/Email%20Updates/views/Updates?limit=25&offset=0&where=', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
    }
}