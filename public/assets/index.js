import postSize from './post_size.js';
import interactionModal from './interaction_modals.js';
import registerFormValidation from './registerValidationForm.js';
import counterRender from './get_counters.js';
import getMessages from './messages/get_messages.js'

interactionModal();
registerFormValidation();
counterRender();
getMessages()

alert(postSize('Это новый пост'));
