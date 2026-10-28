const STATUSES = ['new', 'contacted', 'qualified', 'won', 'lost'];

const leads = [
  { id: 1, name: 'Laura Martínez', company: 'Andes Logística', status: 'new', email: 'laura.martinez@example.com', createdAt: '2026-09-02T14:05:00Z' },
  { id: 2, name: 'Carlos Rojas', company: 'Café Sierra Verde', status: 'contacted', email: 'carlos.rojas@example.com', createdAt: '2026-09-03T09:30:00Z' },
  { id: 3, name: 'Marta Gómez', company: 'Textiles del Valle', status: 'qualified', email: 'marta.gomez@example.com', createdAt: '2026-09-05T16:45:00Z' },
  { id: 4, name: 'Julián Herrera', company: 'Constructora Altamira', status: 'won', email: 'julian.herrera@example.com', createdAt: '2026-09-07T11:10:00Z' },
  { id: 5, name: 'Sofía Peña', company: 'Clínica Dental Sonrisa', status: 'lost', email: 'sofia.pena@example.com', createdAt: '2026-09-08T13:20:00Z' },
  { id: 6, name: 'Andrés Cárdenas', company: 'Ruta Norte Transportes', status: 'new', email: 'andres.cardenas@example.com', createdAt: '2026-09-10T08:15:00Z' },
  { id: 7, name: 'Valentina Ruiz', company: 'Estudio Pixel', status: 'contacted', email: 'valentina.ruiz@example.com', createdAt: '2026-09-12T15:00:00Z' },
  { id: 8, name: 'Diego Salazar', company: 'AgroFértil S.A.S.', status: 'qualified', email: 'diego.salazar@example.com', createdAt: '2026-09-14T10:40:00Z' },
  { id: 9, name: 'Camila Torres', company: 'Librería El Faro', status: 'new', email: 'camila.torres@example.com', createdAt: '2026-09-15T17:25:00Z' },
  { id: 10, name: 'Mateo Vargas', company: 'Panadería La Espiga', status: 'won', email: 'mateo.vargas@example.com', createdAt: '2026-09-17T12:00:00Z' },
  { id: 11, name: 'Isabela Mejía', company: 'Hotel Brisa Caribe', status: 'qualified', email: 'isabela.mejia@example.com', createdAt: '2026-09-19T09:05:00Z' },
  { id: 12, name: 'Sebastián Ortiz', company: 'Energía Solar Cumbre', status: 'contacted', email: 'sebastian.ortiz@example.com', createdAt: '2026-09-21T14:50:00Z' },
  { id: 13, name: 'Daniela Castro', company: 'Moda Urbana Lab', status: 'lost', email: 'daniela.castro@example.com', createdAt: '2026-09-23T16:10:00Z' },
  { id: 14, name: 'Felipe Navarro', company: 'Taller Mecánico Rápido', status: 'new', email: 'felipe.navarro@example.com', createdAt: '2026-09-25T10:30:00Z' },
  { id: 15, name: 'Natalia Pardo', company: 'Consultores Horizonte', status: 'won', email: 'natalia.pardo@example.com', createdAt: '2026-09-27T11:45:00Z' },
  { id: 16, name: 'Ricardo Londoño', company: 'Distribuidora Montaña', status: 'contacted', email: 'ricardo.londono@example.com', createdAt: '2026-09-29T13:35:00Z' },
  { id: 17, name: 'Paula Jiménez', company: 'Academia Idiomas Global', status: 'qualified', email: 'paula.jimenez@example.com', createdAt: '2026-10-01T09:55:00Z' },
  { id: 18, name: 'Tomás Aguirre', company: 'Ferretería Central', status: 'lost', email: 'tomas.aguirre@example.com', createdAt: '2026-10-03T15:20:00Z' }
];

module.exports = { leads, STATUSES };
