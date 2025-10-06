export class Technology {
  constructor(name, type) {
    this.validation(name, type);
    this.name = name;
    this.type = type;
  }

  validation(name, type) {
    if (!name) {
      throw new Error("Invalid technology name");
    }
    if (!type) {
      throw new Error("Invalid technology type");
    }
  }

  description() {
    return `Nella mia esperienza ho utilizzato Java in più di un progetto, ma principalmente in due modi:
1.	Sviluppo di applicazioni mobile in ambito logistico, quindi sfruttando il framework previsto dallo sviluppo Android. Per ulteriori dettagli relativi alle mie esperienze Android, si può far riferimento alla apposita sezione.
2.	Sviluppo di micro servizi in Java tramite framework Spring Boot.
`;
  }
}