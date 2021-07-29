import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from "../../services/serach.service";
import {GameList, WordList} from "../../interfaces/search.interfaces";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  gameList: GameList[] = [];
  wordList: WordList[] = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  submitted = false;
  searchForm = new FormGroup({
    game: new FormControl(null),
    word_en: new FormControl('', Validators.required),
  });

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.searchService.get_game_list()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        this.gameList = res.reverse();
      });
  }

  ngOnDestroy(): void {
    if (this._unsubscribeAll) {
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }

  onSubmit(): void {
    this.searchService.get_word_list({
      ...this.searchForm.value
    }).subscribe((res) => {
      this.wordList = res.reverse();
    });
  }
}
