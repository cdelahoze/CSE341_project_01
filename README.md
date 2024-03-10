// create user
/**
* @swagger
* components:
*  schemas:
*   User:
*     type: object
*     properties:
*       name:
*         type: string
*         description: the user name
*       age:
*         type: integer
*         description: the user age
*       email:
*         type: string
*         description: the user email
*     required:
*       - name
*       - age
*       - email
*     example:
*       name: Alan Kay
*       age: 70
*       email: alan@email.com
*/

/**
@swagger
 /api/users:
  post:
   summary: create a new user
   tags: [User]
   requestBody:
     required: true
     content:
       application/json:
         schema:
           type: object
           $ref: '#/components/schemas/User'

*/