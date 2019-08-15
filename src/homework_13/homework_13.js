import './homework_13.css';

class Hello {
    constructor(id, idTwo, mainBlock, line, slide) {
        this.id = document.querySelector(id);
        this.idTwo = document.querySelector(idTwo);
        this.mainBlock = document.querySelector(mainBlock).offsetWidth;
        this.line = document.querySelector(line);
        this.slide = document.querySelectorAll(slide);

        this.block = document.querySelector(mainBlock); 
        this.radio = document.querySelectorAll('.radio');
        this.radioBtnBlock = document.querySelector('.radio-buttons');

        this.step = 0;
        this.indexSlide = 0;
        this.arrWidth = [0]; 
        this.allWidth = 0; 
        this.radio[0].classList.add('active');

        this.startSlider();
        this.onClick();
        this.width();
        this.mouseEvent();
        this.radioButton();
    }

    radioButton() {
        for(let i = 0; i < this.slide.length; i++) {
            this.radio[i].onclick = () => {
                this.toogleOff();
                this.line.style.transform = 'translateX(-' +  i * this.arrWidth[i] + 'px';
                this.radio[i].classList.add('active'); 
                this.indexSlide = i;
                this.step = this.arrWidth[i] * i;
            }
        }
    }

    mouseEvent() {
        this.block.onmouseleave = () => {
            this.startSlider();
        };

        this.radioBtnBlock.onmouseenter = () => {
            this.stopSlider();
        }

        this.id.onmouseenter = () => {
            this.stopSlider();
        }
        this.idTwo.onmouseenter = () => {
            this.stopSlider();
        }
        

        this.radioBtnBlock.onmouseleave = () => {
            this.startSlider();
        }

        this.block.onmouseenter = () => {
            this.stopSlider();
        }

    }

    stopSlider() {
        clearInterval(this.startSlide);
    }

    startSlider() {
        this.startSlide = setInterval(() => {
            this.right();
        }, 3000);
    }

    width() {
        for (let i = 0; i < this.slide.length; i++) {
            this.arrWidth.push(this.slide[i].offsetWidth);
            this.allWidth += this.slide[i].offsetWidth;
        }
    }

    toogleOff() {
        for (let i = 0; i < this.radio.length; i++) {
            this.radio[i].classList.remove('active');
        }
    }

    radioAuto() {
        this.indexSlide = this.indexSlide+1;
        if (this.indexSlide === this.slide.length) {
            this.indexSlide = 0;
        }
        this.toogleOff();
        this.radio[this.indexSlide].classList.add('active');
    }

    backSlide() {
        this.indexSlide = this.indexSlide-1;
        if (this.indexSlide < 0) {
            this.indexSlide = 4;
        }
        this.toogleOff();
        this.radio[this.indexSlide].classList.add('active');
    }


    right() {
        this.step += this.arrWidth[1];
        if (this.step > this.allWidth - this.arrWidth[1]) {
            this.step = 0;
        };
        this.line.style.transform = 'translateX(-' + this.step + 'px)';
        this.radioAuto();
    }

    left() {
        this.step -= this.arrWidth[1];
        if (this.step < 0) {
            this.step = this.allWidth - this.arrWidth[1];
        }
        this.line.style.transform = 'translateX(-' + this.step + 'px)';
        this.backSlide();
    }

    onClick() {
        this.id.onclick = () => {
            this.right();
        }
        this.idTwo.onclick = () => {
            this.left();
        }
    }
}

new Hello('#right', '#left', '.container', '.sliders', '.slider')