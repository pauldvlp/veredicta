import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Cuéntanos tu situación',
    description: 'Completa el formulario o escríbenos por WhatsApp con una breve descripción de tu consulta. No es necesario enviar documentos en esta etapa; solo necesitamos entender el panorama general de tu caso.',
  },
  {
    step: 2,
    title: 'Revisamos tu caso',
    description: 'Analizamos la información inicial para determinar la mejor forma de orientarte, identificar las áreas jurídicas involucradas y definir si podemos acompañarte en el proceso.',
  },
  {
    step: 3,
    title: 'Agenda y próximos pasos',
    description: 'Coordinamos una consulta formal para revisar tu situación con mayor detalle, responder tus preguntas y definir la ruta de acción estratégica que mejor se adapte a tus objetivos.',
  },
];
