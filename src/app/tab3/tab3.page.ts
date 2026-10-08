
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular';

interface Proyecto {
  nombre: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
  enlace: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class Tab3Page {

  proyectos: Proyecto[] = [

    {
      nombre: 'MÚLTIPLOS',
      categoria: 'APLICACIÓN MÓVIL',
      descripcion:
        'Aplicación educativa con cinco contadores ' +
        'interactivos y una función para identificar ' +
        'números primos del 1 al 50.',
      tecnologias: [
        'Ionic',
        'Angular',
        'Capacitor'
      ],
      enlace:
        'https://github.com/Dilanbkr7/multiplos'
    },

    {
      nombre: 'Tienda Tecnológica CRUD',
      categoria: 'DESARROLLO BACKEND',
      descripcion:
        'Sistema de gestión de productos ' +
        'que permite registrar, consultar, ' +
        'actualizar y eliminar información.',
      tecnologias: [
        'Java',
        'Spring Boot',
        'MySQL',
        'Docker'
      ],
      enlace:
        'https://github.com/Dilanbkr7/tienda-tecnologica-crud'
    },

    {
      nombre: 'Calculadora UDP',
      categoria: 'REDES Y PROGRAMACIÓN',
      descripcion:
        'Aplicación cliente-servidor que ' +
        'permite realizar operaciones matemáticas ' +
        'mediante comunicación UDP.',
      tecnologias: [
        'Java',
        'UDP',
        'JavaFX'
      ],
      enlace:
        'https://github.com/Dilanbkr7/Calculadora-UDP'
    },

    {
      nombre: 'Plastimad CRM',
      categoria: 'DESARROLLO WEB',
      descripcion:
        'Proyecto de plataforma web para ' +
        'gestionar pedidos, información comercial ' +
        'y relaciones con clientes.',
      tecnologias: [
        'Next.js',
        'Supabase',
        'PostgreSQL'
      ],
      enlace:
        'https://github.com/Dilanbkr7/plastimad-crm'
    }

  ];

}
