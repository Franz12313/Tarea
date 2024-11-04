const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));  // Sirve archivos desde la raíz del proyecto

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
