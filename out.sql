PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Profesores" ("ProfesorID" NUMERIC PRIMARY KEY, "Nombre" INTEGER NOT NULL, "Apellido" INTEGER NOT NULL, "CorreoElectronico" INTEGER UNIQUE, "Telefono" NUMERIC NOT NULL, Contraseña VARCHAR2(4));
INSERT INTO Profesores VALUES(1,'Alejandro','Almeja','p@duoc.cl',77777777,'p001');
INSERT INTO Profesores VALUES(2,'Juan','Juanesco','p1@duoc.cl',11111111,'p002');
INSERT INTO Profesores VALUES(3,'Pablito','Clavito','p2@duoc.cl',55555555,'p003');
CREATE TABLE Alumnos (
    AlumnoID NUMBER PRIMARY KEY,
    Nombre VARCHAR2(50),
    Apellido VARCHAR2(50),
    CorreoElectronico VARCHAR2(100),
    Telefono VARCHAR2(20)
, Contraseña VARCHAR2(4));
INSERT INTO Alumnos VALUES(1,'Carlos','Martínez','carlos.martinez@duoc.cl','111-222-3333','0001');
INSERT INTO Alumnos VALUES(2,'Ana','Rodríguez','ana.rodriguez@duoc.cl','444-555-6666','0002');
INSERT INTO Alumnos VALUES(3,'Luis','Fernández','luis.fernandez@duoc.cl','222-111-4444','0003');
INSERT INTO Alumnos VALUES(4,'Elena','Sánchez','elena.sanchez@duoc.cl','333-555-8888','0004');
INSERT INTO Alumnos VALUES(5,'Sara','Gómez','sara.gomez@duoc.cl','888-999-3333','0005');
INSERT INTO Alumnos VALUES(6,'David','Pérez','david.perez@duoc.cl','666-444-7777','0006');
INSERT INTO Alumnos VALUES(7,'Pablo','Morales','pablo.morales@duoc.cl','555-999-2222','0007');
INSERT INTO Alumnos VALUES(8,'Isabel','Jiménez','isabel.jimenez@duoc.cl','777-444-1111','0008');
INSERT INTO Alumnos VALUES(9,'Marta','López','marta.lopez@duoc.cl','999-222-5555','0009');
INSERT INTO Alumnos VALUES(10,'Javier','García','javier.garcia@duoc.cl','111-555-8888','0010');
CREATE TABLE Asignaturas (
    AsignaturaID NUMBER PRIMARY KEY,
    NombreAsignatura VARCHAR2(100),
    DescripcionAsignatura VARCHAR2(500)
);
INSERT INTO Asignaturas VALUES(1,'Matemáticas','Curso de matemáticas avanzadas');
INSERT INTO Asignaturas VALUES(2,'Historia','Curso de historia mundial');
INSERT INTO Asignaturas VALUES(3,'Ciencias','Curso de ciencias naturales');
CREATE TABLE Clases (
    ClaseID NUMBER PRIMARY KEY,
    ProfesorID NUMBER REFERENCES Profesores(ProfesorID),
    AsignaturaID NUMBER REFERENCES Asignaturas(AsignaturaID),
    Horario VARCHAR2(20),
    FechaClase DATE,
    Aula VARCHAR2(20)
);
INSERT INTO Clases VALUES(1,1,1,'10:00 AM - 12:00 PM','2023-10-27','101');
INSERT INTO Clases VALUES(2,2,2,'2:00 PM - 4:00 PM','2023-10-28','201');
INSERT INTO Clases VALUES(3,3,3,'9:00 AM - 11:00 AM','2023-10-29','102');
CREATE TABLE Asistencia (
    AsistenciaID NUMBER PRIMARY KEY,
    AlumnoID NUMBER REFERENCES Alumnos(AlumnoID),
    ClaseID NUMBER REFERENCES Clases(ClaseID),
    FechaAsistencia DATE,
    EstadoAsistencia VARCHAR2(20) -- los estados que necesites (Presente - Ausente)
);
INSERT INTO Asistencia VALUES(1,1,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(2,2,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(3,3,1,'2023-10-27','Ausente');
INSERT INTO Asistencia VALUES(4,4,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(5,5,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(6,6,1,'2023-10-27','Ausente');
INSERT INTO Asistencia VALUES(7,7,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(8,8,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(9,9,1,'2023-10-27','Ausente');
INSERT INTO Asistencia VALUES(10,10,1,'2023-10-27','Presente');
INSERT INTO Asistencia VALUES(11,1,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(12,2,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(13,3,2,'2023-10-28','Ausente');
INSERT INTO Asistencia VALUES(14,4,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(15,5,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(16,6,2,'2023-10-28','Ausente');
INSERT INTO Asistencia VALUES(17,7,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(18,8,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(19,9,2,'2023-10-28','Ausente');
INSERT INTO Asistencia VALUES(20,10,2,'2023-10-28','Presente');
INSERT INTO Asistencia VALUES(21,1,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(22,2,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(23,3,3,'2023-10-29','Ausente');
INSERT INTO Asistencia VALUES(24,4,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(25,5,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(26,6,3,'2023-10-29','Ausente');
INSERT INTO Asistencia VALUES(27,7,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(28,8,3,'2023-10-29','Presente');
INSERT INTO Asistencia VALUES(29,9,3,'2023-10-29','Ausente');
INSERT INTO Asistencia VALUES(30,10,3,'2023-10-29','Presente');
COMMIT;
