import postSize from './post_size.js';
import interactionModal from './interaction_modals.js';
import registerFormValidation from './registerValidationForm.js';
import counterRender from './get_counters.js';
import getMessages from './messages/get_messages.js'
import getContentPage from './get_page_content.js'

interactionModal();
registerFormValidation();
counterRender();
getMessages()
getContentPage();

// alert(postSize('Это новый пост'));
