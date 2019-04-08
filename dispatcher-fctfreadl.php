<?php
// Get a global counter from server and update counter
$counter_file = "/tmp/dispatch-counter-fctfreadl";
$counter_val = file_get_contents($counter_file);
file_put_contents($counter_file, $counter_val + 1);

// Possible redirections
$redirects = array("http://spellout.net/ibexexps/redudley/fctfreadlfor/experiment.html",
                   "http://spellout.net/ibexexps/redudley/fctfreadlrev/experiment.html",);
// Redirect user to the next link
header("Location: " . $redirects[$counter_val % count($redirects)]);
?>
