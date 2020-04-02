import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm = null;
  get pokeList() {
    return this.pokeapiService.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  }

  get pkmSprite() {
    const number = `000${this.selectedPkm.number}`.slice(-3);
    console.log(number);
    return `https://serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.pokeapiService.listAll();
  }

  selectPokemon(pkm) {
    this.selectedPkm = pkm;
    console.log(pkm);
  }

}
