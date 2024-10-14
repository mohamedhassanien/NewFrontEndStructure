import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-prospect',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './prospect.component.html',
  styleUrl: './prospect.component.scss',
  providers: [provideNativeDateAdapter()],

})
export class ProspectComponent {
  
}
