const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Selected item navigation
function listLeftSideBar() {
    const open = $('.item-open__even')
    const subList = $('.list-sub__even')
    const iconRight = $('.icon-right__even')
    const iconDown = $('.icon-down__even')
    const listItem = $$('.item__even')

    open.addEventListener('click', () => {
        if(subList.classList.contains('hide')) {
            subList.classList.remove('hide')
            iconRight.style.display = "none"
            iconDown.style.display = "inline-block"
        } else {
            subList.classList.add('hide')
            iconDown.style.display = "none"
            iconRight.style.display = "inline-block"
        }
    })

    subList.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    for(const item of listItem) {
        item.addEventListener('click', () => {
            for(const it of listItem) {
                it.classList.remove('active')
            }
            item.classList.add('active')
        })
    }
}

// Open - Close navigation
function navigationEven() {
    const btnOpen = $('.btn-open__even')
    const btnClose = $('.btn-close__even')
    const sidebar = $('.sidebar__even')
    const home = $('.home__even')

    btnOpen.addEventListener('click', () => {
        sidebar.style.margin = "0";
        home.style.margin = "0 0 0 250px";
        btnOpen.classList.remove('flex')
        btnOpen.classList.add('hide')
    })

    btnClose.addEventListener('click', () => {
        sidebar.style.margin = "0 0 0 -250px";
        home.style.margin = "0"
        btnOpen.classList.add('flex')
        btnOpen.classList.remove('hide')
    })
}

// Open - Close modal
function openModal() {
    const modal = $(".modal__even");
    const listOpenModal = $$(".open-modal__even");
    const closeModal = $(".close-modal__even");

    const showModal = () => {
        modal.classList.add("is-open");
    };

    const hideModal = () => {
        modal.classList.remove("is-open");
    };

    for(const openModal of listOpenModal) {
        openModal.addEventListener("click", showModal);
    }
    closeModal.addEventListener("click", hideModal);
}

// filter animal
function optionFilterTable() {
    const filter = $('.card-filter__even')
    const selected = $('.card-filter-selected__even')
    const listOption = $$('.card-filter-option__even')
    const selectedText = $('.card-filter-selected-text__even')

    const listAnimal = $$('.animal')

    selected.addEventListener("click", () => filter.classList.toggle("active"))

    listOption.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".card-filter-option-text__even").innerHTML
            selectedText.innerHTML = selectedOption

            filter.classList.remove("active")

            for(const animal of listAnimal) {
                if(animal.classList.contains(option.attributes.id.value)) {
                    animal.style.transform = "scale(1)"
                    setTimeout(() => {
                        animal.style.display = "table-row"
                    }, 500);
                } else {
                    animal.style.transform = "scale(0)"
                    setTimeout(() => {
                        animal.style.display = "none"
                    }, 500);
                }
            }
        })
    })
}

// pagination
function pagination() {
    const pagination = $('.card-pagination')
    const prev = $('.card-pagination-prev__even')
    const next = $('.card-pagination-next__even')
    const arrayIndexs = Array.from($$('.card-pagination__index'))
    let current = 0

    prev.addEventListener("click", () => {
        if(current > 0) {
            current--;
            pagination.className = 'card-pagination mt-1x pd-2x flex align-center column-gap-2x'
            pagination.offsetWidth;
            pagination.classList.add('open')
            const svg = pagination.querySelectorAll('svg')
            const valueTranslate = current * 40;
            svg.forEach(element => {
                element.style.transform = `translateX(${valueTranslate}px)`
            });
            pagination.classList.add('flip')
        }
    })

    arrayIndexs.forEach((index, i) => {
        index.addEventListener('click', (e) => {
            pagination.className = 'card-pagination mt-1x pd-2x flex align-center column-gap-2x'
            void pagination.offsetWidth;
            pagination.classList.add('open')
            const svg = pagination.querySelectorAll('svg')
            const valueTranslate = i * 40;
            svg.forEach(element => {
                element.style.transform = `translateX(${valueTranslate}px)`
            });
            if (current > i) {
                pagination.classList.add('flip')
            }
            current = i
        })
    })

    next.addEventListener("click", () => {
        if(current < arrayIndexs.length - 1) {
            current++;
            pagination.className = 'card-pagination mt-1x pd-2x flex align-center column-gap-2x'
            pagination.offsetWidth;
            pagination.classList.add('open')
            const svg = pagination.querySelectorAll('svg')
            const valueTranslate = current * 40;
            svg.forEach(element => {
                element.style.transform = `translateX(${valueTranslate}px)`
            });
        }
    })
}

// CKeditor
function ckeditor() {
    ClassicEditor
        .create(document.querySelector('#breed-description'), {
            toolbar: {
                items: [
                    'exportPDF','exportWord', '|',
                    'findAndReplace', 'selectAll', '|',
                    'heading', '|',
                    'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat', '|',
                    'bulletedList', 'numberedList', 'todoList', '|',
                    'outdent', 'indent', '|',
                    'undo', 'redo',
                    'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
                    'alignment', '|',
                    'link', 'insertImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
                    'specialCharacters', 'horizontalLine', 'pageBreak', '|',
                    'textPartLanguage', '|',
                    'sourceEditing'
                ],
                shouldNotGroupWhenFull: true
            },
            list: {
                properties: {
                    styles: true,
                    startIndex: true,
                    reversed: true
                }
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            placeholder: 'Description',
            fontFamily: {
                options: [
                    'default',
                    'Arial, Helvetica, sans-serif',
                    'Courier New, Courier, monospace',
                    'Georgia, serif',
                    'Lucida Sans Unicode, Lucida Grande, sans-serif',
                    'Tahoma, Geneva, sans-serif',
                    'Times New Roman, Times, serif',
                    'Trebuchet MS, Helvetica, sans-serif',
                    'Verdana, Geneva, sans-serif'
                ],
                supportAllValues: true
            },
            fontSize: {
                options: [ 10, 12, 14, 'default', 18, 20, 22 ],
                supportAllValues: true
            },
            htmlSupport: {
                allow: [
                    {
                        name: /.*/,
                        attributes: true,
                        classes: true,
                        styles: true
                    }
                ]
            },
            htmlEmbed: {
                showPreviews: true
            },
            link: {
                decorators: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                }
            },
            mention: {
                feeds: [
                    {
                        marker: '@',
                        feed: [
                            '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                            '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                            '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
                            '@sugar', '@sweet', '@topping', '@wafer'
                        ],
                        minimumCharacters: 1
                    }
                ]
            },
            removePlugins: [
                'CKBox',
                'CKFinder',
                'EasyImage',
                'RealTimeCollaborativeComments',
                'RealTimeCollaborativeTrackChanges',
                'RealTimeCollaborativeRevisionHistory',
                'PresenceList',
                'Comments',
                'TrackChanges',
                'TrackChangesData',
                'RevisionHistory',
                'Pagination',
                'WProofreader',
                'MathType'
            ]
        });
}