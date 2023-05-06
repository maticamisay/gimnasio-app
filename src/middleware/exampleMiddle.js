// middleware que muestra por consola un hola
module.exports = (req, res, next) => {
  console.log(req.body);
  // si la propiedad apellido en el body existe
  if (req.body.apellido) {
    // se agrega la propiedad nombreCompleto al body
    req.body.nombreCompleto = `${req.body.nombre} ${req.body.apellido}`;
    // borrar nombre y apellido
    delete req.body.nombre;
    delete req.body.apellido;
  }
  // si no existe, agrego una propieda llamada edad
  if (!req.body.edad) {
    req.body.edad = 0;
  }
  next();
};