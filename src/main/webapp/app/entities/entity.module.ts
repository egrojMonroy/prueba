import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PruebaBlogModule } from './blog/blog.module';
import { PruebaEntryModule } from './entry/entry.module';
import { PruebaTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PruebaBlogModule,
        PruebaEntryModule,
        PruebaTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaEntityModule {}
