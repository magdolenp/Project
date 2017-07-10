import { Component } from '@angular/core';

interface Obj { [key: string]: any;
}

interface Timestamp {
  start: number;
  end: number;
}

interface Css { [className: string]: boolean;
}

@Component({
  selector: 'fu-app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent {

  task0(): number {
    const sum = (values: number[]) => values.reduce((acc, value) => acc + value) / values.length;
    return sum([1, 2, 3, 4, 5, 6]);
  }

  /**
   * Vstup: neprázdné pole číselných hodnot (number[])
   * Výstup: geometrický průměr hodnot (number).
   */
  task1(): number {
    const sum = (values: number[]) => values.reduce((acc, value) => acc * value) ** (1 / values.length) / values.length;
    return sum([1, 2, 3, 4, 5, 6]);
  }

  /**
   * Vstup: 2 libovolné objekty ({[key: string]: any}, {[key: string]: any})
   * Výstup: Zda objekty mají shodné sady vlastních klíčů (boolean).
   */
  task2(): boolean {
    const obj1: Obj = {'Ola': 420};
    const obj2: Obj = {'Ola': 322};
    const compare = (list1: Obj, list2: Obj) =>
        Object.keys(list1).sort().every((item, index) => item === Object.keys(obj2).sort()[index]);
    return compare(obj1, obj2);
  }

  /**
   * Vstup: 2 libovolné objekty se shodnými sadami klíčů (SomeModel, SomeModel)
   * Výstup: Zda shodně pojmenované properties mají stejnou hodnotu (boolean).
   */
  task3(): boolean {
    const obj1: Obj = {'Ola': 322, 'Aaa': 95};
    const obj2: Obj = {'Bbb': 42, 'Ola': 322};
    const compare = (list1: Obj, list2: Obj) => Object.keys(list1).every(
      item =>
        !(item in list2) || list1[item] === list2[item]
    );
    return compare(obj1, obj2);
  }

  /**
   * Vstup: pole událostí, tj. objektů obsahujících počáteční a konečný timestamp ({start: number, end: number}[])
   * Výstup: pole délek trvání jednotlivých událostí v sekundách number[]
   */
  task4(): number[] {
    const ts: Timestamp[] = [
      {start: 10, end: 20},
      {start: 20, end: 30},
      {start: 20, end: 40},
    ];
    const duration = (list: Timestamp[]) => list.map((item: Timestamp) => item.end - item.start);
    return duration(ts);
  }

  /**
   * Vstup: objekt mapující CSS třídy na pravdivostní hodnoty ({[className: string]: boolean})
   * Výstup: string složený z CSS tříd mapovaných na true (v libovolném pořadí) konkatenovaných přes 1 mezeru (string)
   */
  task5(): string {
    const obj1: Css = {'div': true, 'body': false, 'img': true};
    const concat = (css: Css) => Object.keys(css).filter(item => css[item]).join(' ');
    return concat(obj1);
  }

  /**
   * Vstup: neprázdné pole řádků tabulky, tj. objektů mapujících názvy sloupců (shodné pro všechny řádky) na hodnoty buněk (RowModel[])
   * Výstup: pole uspořádných n-tic (heterogenních polí), kde první n-tice obsahuje názvy sloupců tabulky
   * a každá další k+1-tá n-tice obsahuje hodnoty buněk k-tého řádku v odpovídajícím pořadí (any[][])
   */
  task6(): string {
    const obj1 = [
      {a: 1, b: 2, c: 3},
      {a: 4, b: 5, c: 6},
    ];
    const result = (list: any[]) => [Object.keys(list[0]), ...list.map(item => Object.keys(item).map(key => item[key]))];
    console.log(result(obj1));
    return JSON.stringify(result(obj1));
  }
}
