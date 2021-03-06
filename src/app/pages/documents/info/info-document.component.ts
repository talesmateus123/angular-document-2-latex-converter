import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';

import { DocumentService as Service } from '../shared/services/document.service';
import { Document } from './../shared/models/document';

@Component({
  selector: 'app-info-document',
  templateUrl: './info-document.component.html',
  styleUrls: ['./info-document.component.css']
})
export class InfoDocumentComponent implements OnInit {
  private items: MenuItem[];

  public document: Document;
  private id: string;

  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.document = this.service.get(this.id);
  }

  update() {
    this.service.update(this.id, this.document);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
