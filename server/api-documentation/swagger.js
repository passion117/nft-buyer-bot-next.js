module.exports = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Bloca API with Swagger',
      version: '0.1.0',
      description: 'This is a simple CRUD API application for Bloca made with Express and documented with Swagger.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/`,
      },
    ],

    // * Add new tags here!
    tags: [
      {
        name: 'Auth',
        description: 'Everything about authentication',
      },
      {
        name: 'Profile',
        description: 'Everything about profile page',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./server/routes/api/*.js'],
};
