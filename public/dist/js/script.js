// Type code example
$(document).ready(() => {
    (function () {
        var $container = $(document.getElementById('type_code'));

        var $city = $container.find('[name="city"]'),
            $typeCode = $container.find('[name="typecode"]');

        $city.fias({
            type: 'city',
        });

        $city.fias('withParents', true);

        $typeCode.change(function () {
            changeTypeCode($(this).val());
        });

        changeTypeCode($container.find('[name="typecode"]:checked').val());

        function changeTypeCode(value) {
            var typeCode = null;

            switch (value) {
                case 'city':
                    typeCode = $.fias.typeCode.city;
                    break;

                case 'settlement':
                    typeCode = $.fias.typeCode.city + $.fias.typeCode.settlement;
                    break;

                case 'all':
                    typeCode = $.fias.typeCode.city + $.fias.typeCode.settlement + $.fias.typeCode.village;
                    break;
            }

            $city.fias('typeCode', typeCode);
        }
    })();

})

