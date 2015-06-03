document.addEventListener('DOMContentLoaded',function ( ) {
        
    console.log('Hello word!');

    // Paypal menu
    var ddMenu = (function () {
        var active = null;
        var spacer = document.getElementById('paypal-spacer');

        function open (elem) {
            if(active !== elem){
                if(active){
                    active.className = active.className.replace(' open ','');
                }
                elem.className += ' open ';
                active = elem;
                spacer.className = 'open';
            }
            console.log(active,elem);
        }
        function close (elem) {
            if(active === elem){
                elem.className = elem.className.replace(' open ','');
                active = null;
                spacer.className = '';
            }
        }

        function amIOpen (elem) {
            return active === elem;
        }

        return function (controllerElem, targetElement) {

            var self = this !== window ? this : {} ;

            self.controllerElem = controllerElem;
            self.targetElement = targetElement;
            self.controllerElem.addEventListener('click',function ( ) {
                if(!amIOpen(self.targetElement)){
                    return open(self.targetElement);
                }
                close(self.targetElement);
            });
            
        }

    })();

    var ctrls = document.getElementsByClassName('paypal-control');
    var targets = document.getElementsByClassName('paypal-submenu');

    for (var i = 0; i < ctrls.length; i++) {
        new ddMenu(ctrls[i],targets[i]);
    };

})();