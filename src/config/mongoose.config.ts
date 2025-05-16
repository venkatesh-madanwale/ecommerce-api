// File: src/config/mongoose.config.ts

import {MongooseModuleOptions} from '@nestjs/mongoose'; // Import MongooseModuleOptions from @nestjs/mongoose

export const mongooseOptions : MongooseModuleOptions = {// Exporting mongooseOptions as MongooseModuleOptions
    connectionFactory: (connection) => {// Connection factory function
        console.log(['MongoDB connected to ', connection.name]); // Log message when connection is established
        return connection; // Return the connection
    }
}
