## Dockerization
The application is dockerized for easy deployment. To build and run the Docker container, follow these steps:

1. Create a `.env` file in the current directory with the following content:

   ```env
   MONGODB_SERVER=localhost
   MONGODB_ADMINUSERNAME=admin
   MONGODB_ADMINPASSWORD=password
   DB_NAME=test_DB
   ```

   Update the values according to your preferences.


2. Build the Docker image:

   ```bash
   docker build -t your-image-name .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 3000:3000 --env-file .env your-image-name
   ```

   Replace `your-image-name` with a suitable name for your Docker image.

### Explanation of variables

- `MONGODB_SERVER`: MongoDB server address. Default is `localhost`.
- `MONGODB_ADMINUSERNAME`: MongoDB admin username. Default is `admin`.
- `MONGODB_ADMINPASSWORD`: MongoDB admin password. Default is `password`.
- `DB_NAME`: MongoDB database name. Default is `test_DB`.


## Usage

Access the application at [http://localhost:3000](http://localhost:3000) after running the Docker container.

## Contributors

- Ahmed
- ahmedmusa.swe@gmail.com

Feel free to contribute and improve this basic CRUD application!