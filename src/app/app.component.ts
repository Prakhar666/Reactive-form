import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransferService } from './transfer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterReactive';
  name = new FormControl('');
}

