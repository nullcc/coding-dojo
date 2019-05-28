enum TOKEN_TYPE {
  WORD,
  BLANK,
  NL,
  EOF,
}

interface Token {
  type: TOKEN_TYPE;
  value: string;
}

export default class WordWrapper {
  private words: string;
  private maxColumn: number;
  private currentPosition: number;
  private currentRowColumn: number;

  constructor(words: string, maxColumn: number) {
    this.words = words;
    this.maxColumn = maxColumn;
    this.currentPosition = 0;
    this.currentRowColumn = 0;
  }

  public wrap(): string {
    let rows = [];
    let row = '';
    let done = false;

    while (true) {
      if (done) {
        break;
      }
      const token = this.readNextToken();
      switch (token.type) {
        case TOKEN_TYPE.EOF:
          if (row.length > 0) {
            rows.push(row.trim());
          }
          done = true;
          break;
        case TOKEN_TYPE.NL: {
          rows.push(row.trim());
          row = '';
          this.lineBreak();
          break;
        }
        case TOKEN_TYPE.WORD:
        case TOKEN_TYPE.BLANK: {
          row += `${token.value}`;
          break;
        }
        default:
          break;
      }
    }
    return rows.join('\n');
  }

  private readNextToken(): Token {
    let value = '';
    let n = 0;

    if (this.isEndOfWords()) {
      return { type: TOKEN_TYPE.EOF, value: null };
    }

    while (true) {
      if (this.isEndOfWords()) {
        break;
      }
      const c = this.words[this.currentPosition++];
      if (this.isBlankCharacter(c)) {
        if (value.length === 0) {
          // only one blank character
          n += 1;
          value += c;
        } else {
          this.currentPosition--;
        }
        break;
      }
      n += 1;
      value += c;
    }

    if (this.currentRowColumn + n <= this.maxColumn) {
      if (this.isBlankCharacter(value)) {
        this.currentRowColumn += n;
        return { type: TOKEN_TYPE.BLANK, value };
      }
      this.currentRowColumn += n + 1;
      return { type: TOKEN_TYPE.WORD, value };
    }

    if (this.currentRowColumn === 0) {
      throw new Error(`The max column: ${this.maxColumn} is less than the length of the word: \"${value}\" (length ${value.length})`);
    }
    this.backward(n);
    return { type: TOKEN_TYPE.NL, value: '\n' };
  }

  private lineBreak() {
    this.currentRowColumn = 0;
  }

  private isBlankCharacter(c: string): boolean {
    return /^\s$/.test(c);
  }

  private isEndOfWords(): boolean {
    return this.currentPosition ===  this.words.length;
  }

  private backward(n: number) {
    this.currentRowColumn -= n;
    this.currentPosition -= n;
  }
}
