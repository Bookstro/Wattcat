window.onload = function(){


let Inline = Quill.import('blots/inline');
let Block = Quill.import('blots/block');
let BlockEmbed = Quill.import('blots/block/embed');

class BoldBlot extends Inline { }
BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline { }
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

class LinkBlot extends Inline {
  static create(url) {
    let node = super.create();
    node.setAttribute('href', url);
    node.setAttribute('target', '_blank');
    return node;
  }
  
  static formats(node) {
    return node.getAttribute('href');
  }
}
LinkBlot.blotName = 'link';
LinkBlot.tagName = 'a';

class BlockquoteBlot extends Block { }
BlockquoteBlot.blotName = 'blockquote';
BlockquoteBlot.tagName = 'blockquote';

class HeaderBlot extends Block {
  static formats(node) {
    return HeaderBlot.tagName.indexOf(node.tagName) + 1;
  }
}
HeaderBlot.blotName = 'header';
HeaderBlot.tagName = ['H1', 'H2'];

class DividerBlot extends BlockEmbed { }
DividerBlot.blotName = 'divider';
DividerBlot.tagName = 'hr';

class ImageBlot extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.setAttribute('alt', value.alt);
    node.setAttribute('src', value.url);
    return node;
  }
  
  static value(node) {
    return {
      alt: node.getAttribute('alt'),
      url: node.getAttribute('src')
    };
  }
}

Quill.register(BoldBlot);
Quill.register(ItalicBlot);
Quill.register(LinkBlot);
Quill.register(BlockquoteBlot);
Quill.register(HeaderBlot);
Quill.register(DividerBlot);

let quill = new Quill('#editor-container', {
  placeholder: 'Yazmaya başla...'
});
quill.addContainer($("#tooltip-controls").get(0));
quill.addContainer($("#sidebar-controls").get(0));
quill.on(Quill.events.EDITOR_CHANGE, function(eventType, range) {
  if (eventType !== Quill.events.SELECTION_CHANGE) return;
  if (range == null) return;
  if (range.length === 0) {
    $('#tooltip-controls').hide();
    let [block, offset] = quill.scroll.descendant(Block, range.index);
    if (block != null && block.domNode.firstChild instanceof HTMLBRElement) {
      let lineBounds = quill.getBounds(range);
      $('#sidebar-controls').removeClass('active').show().css({
        left: lineBounds.left - 50,
        top: lineBounds.top - 2
      });
    } else {
      $('#tooltip-controls, #sidebar-controls').hide();
      $('#sidebar-controls').removeClass('active');
    }
  } else {
    $('#sidebar-controls, #sidebar-controls').hide();
    $('#sidebar-controls').removeClass('active');
    let rangeBounds = quill.getBounds(range);
    $('#tooltip-controls').show().css({
      left: rangeBounds.left + rangeBounds.width/2 - $('#tooltip-controls').outerWidth()/2,
      top: rangeBounds.bottom + 10
    });
  }
});

let a = 0;
$('#bold-button').click(function() {
    if(a%2 == 0){
        quill.format('bold', true);
    }else {
        quill.format('bold', false);
    }
    a++;
});

let b = 0;
$('#italic-button').click(function() {
    let active = $(this).hasClass('active');
    if(b%2 == 0){
        quill.format('italic', true);
    }else {
        quill.format('italic', false);
    }
    b++;
});

let c = 0;
$('#link-button').click(function() {
  let value = prompt('Enter link URL');
  quill.format('link', value);
});

let d = 0;
$('#blockquote-button').click(function() {
  if(d%2 == 0){
    quill.format('blockquote', true);
  }else {
    quill.format('blockquote', false);
  }
  d++;
});

let e = 0;
$('#header-1-button').click(function() {
    if(e%2 == 0){
        quill.format('header', 1);
    }else {
        quill.format('header', 0);
    }
  e++;
});

let f = 0;
$('#header-2-button').click(function() {
    if(f%2 == 0){
        quill.format('header', 2);
    }else{
        quill.format('header', 0);
    }
 f++;
});
  
}